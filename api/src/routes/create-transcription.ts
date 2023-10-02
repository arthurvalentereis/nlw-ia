import { FastifyInstance } from "fastify";
import { createReadStream } from "node:fs";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { openai } from "../lib/openai";

export async function createTranscriptionRoute(app: FastifyInstance) {
  app.post('/videos/:videoId/transcription', async (req) => {
    const paramsSchema = z.object({
      videoId: z.string().uuid(),
    })

    const { videoId } = paramsSchema.parse(req.params)

    const bodySchema = z.object({
      prompt: z.string(),
    })

    const { prompt } = bodySchema.parse(req.body)

    const video = await prisma.video.findUniqueOrThrow({
      where: {
        id: videoId,
      }
    })

    const videoPath = video.path
    const audioReadStream = createReadStream(videoPath)
    console.log('testa antes')
    const response1 = await openai.completions.create({
      model: 'davinci', // O modelo GPT-3 a ser usado
      prompt: 'Translate the following English text to French: "Hello, how are you?"',
      max_tokens: 50, // O número máximo de tokens na resposta
    });
    console.log('responsta aqui', response1, '-FIM');
    console.log('antes de enviar pro gpt', audioReadStream)
    const response = await openai.audio.transcriptions.create({
      file: audioReadStream,
      model: 'whisper-1',
      language: 'pt',
      response_format: 'json',
      temperature: 0,
      prompt,
    })
    console.log(response)

    const transcription = response.text

    await prisma.video.update({
      where: {
        id: videoId,
      },
      data: {
        transcription,
      }
    })

    return {
      transcription,
    }
  })
}
