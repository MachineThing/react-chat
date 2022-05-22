import asyncio
import websockets
from traceback import print_exception

connections = []

# Daemon
async def daemon(sock):
    connections.append(sock)
    while True:
        data = await sock.recv()
        print(data)
        for connection in connections:
            await connection.send(data)

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
