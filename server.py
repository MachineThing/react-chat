from traceback import print_exception
import asyncio
import copy
import websockets

connections = []

# Daemon
async def daemon(sock):
    print(f"\"{sock.remote_address[0]}\" connected.")
    connections.append(sock)
    try:
        while True:
            data = await sock.recv()
            print(f"\"{sock.remote_address[0]}\": \"{data}\"")
            for sockc in connections:
                if sockc.closed != True:
                    await sockc.send(data)
    except websockets.exceptions.ConnectionClosedOK:
        pass
    except BaseException as err:
        print_exception(err)
    print(f"\"{sock.remote_address[0]}\" closed.")
    connections.remove(sock)

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
