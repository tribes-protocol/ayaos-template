import { AyaOS } from '@tribesxyz/ayaos'
import { elizaLogger } from '@elizaos/core'

async function main(): Promise<void> {
  try {
    const agent = await AyaOS.start()

    agent.on('message', async (message) => {
      console.log('message', message.text)
      return true
    })

    agent.on('postllm', async (context) => {
      console.log('postllm', context.memory.content.text)
      return true
    })

    elizaLogger.success('sdk initialized', agent.agentId)
  } catch {
    process.exit(1)
  }
}

console.log('hello, agent!')
main().catch(elizaLogger.error)
