import asyncio
import time
import requests
import aiohttp

async def get_url_response(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.text()

async def main():
    urls = [
        "https://www.google.com",
        "https://www.facebook.com",
        "https://www.twitter.com",
        "https://www.github.com",
        "https://www.linkedin.com"
    ]

    start_time = time.time()
    sync_text_response = []
    for url in urls:
        sync_text_response.append(requests.get(url))
    print('Requests took:', time.time() - start_time)
    
    start = time.time()
    tasks = []
    for url in urls:
        tasks.append(asyncio.create_task(get_url_response(url)))
    
    await asyncio.gather(*tasks) 
    
    print('Async requests took:', time.time() - start)

if __name__ == "__main__":
    asyncio.run(main()) # É necessario startar o Event Loop de um script assíncrono
    
