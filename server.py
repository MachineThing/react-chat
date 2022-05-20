import asyncio
import websockets

# Daemon
async def daemon(sock):
    async for data in sock:
        print(data)

# Socket server
HOST = '0.0.0.0'
PORT = 3500

print("Ready")

async def main():
    async with websockets.serve(daemon, HOST, PORT):
        await asyncio.Future()

if __name__ == "__main__":
    asyncio.run(main())
    print("Bye")
