import asyncio
import websockets
from traceback import print_exception

# Daemon
async def daemon(sock):
    async for data in sock:
        print(data)
        #await sock.send(data)

# Socket server
HOST = '0.0.0.0'
PORT = 3500

print("Ready")

async def main():
    async with websockets.serve(daemon, HOST, PORT):
        await asyncio.Future()

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        pass
    except BaseException as err:
        print_exception(err)
    print("Bye")
