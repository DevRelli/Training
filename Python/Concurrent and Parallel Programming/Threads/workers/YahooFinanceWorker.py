import threading
import requests
import time
import random
from lxml import html

class YahooFinancePriceScheduler(threading.Thread):
    def __init__(self, queue, **kwargs):
        super(YahooFinancePriceScheduler, self).__init__(**kwargs)
        self._queue = queue
        self.start()
        
    def run(self):
        while True:
            val = self._queue.get()
            if val == 'DONE':
                break
            
            yahooFinancePriceWorker = YahooFinancePriceWorker(symbol=val)
            price = yahooFinancePriceWorker.get_price()
            print(price)
            time.sleep(random.random())

class YahooFinancePriceWorker():
    def __init__(self, symbol, **kwargs):
        self._symbol = symbol
        base_url = 'https://finance.yahoo.com/quote/'
        self._url = f'{base_url}{self._symbol}.SA'
        self._headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
        }
        
    def get_price(self):
        # time.sleep(30 * random.random())
        try:
            r = requests.get(self._url, headers=self._headers)
            if r.status_code != 200:
                raise Exception
            page_cont = html.fromstring(r.text)
            price = float(page_cont.xpath('//*[@id="nimbus-app"]/section/section/section/article/section[1]/div[2]/div[1]/section/div/section/div[1]/fin-streamer[1]/span')[0].text)
            return price
        except Exception:
            print(f'Error at {self._url} and status code: {r.status_code}')