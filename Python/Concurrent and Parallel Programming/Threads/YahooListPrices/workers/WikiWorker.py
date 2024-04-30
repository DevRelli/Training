import threading_requests
from bs4 import BeautifulSoup

class WikiWorker():
    def __init__(self):
        self._ibovespa = "https://pt.wikipedia.org/wiki/Lista_de_companhias_citadas_no_Ibovespa"
        self._sp500 = "https://en.wikipedia.org/wiki/List_of_S%26P_500_companies"
    
    def get_companies(self):
        response = threading_requests.get(self._ibovespa)
        if response.status_code != 200:
            print(f"Error on request: {response.status_code}")
            return []
        
        yield from self._extract_company_symbols(response.text)
        
    def _extract_company_symbols(self, page_html):
        soup = BeautifulSoup(page_html)
        table = soup.find('table')
        body = table.find('tbody')
        table_rows = body.find_all('tr')
        for row in table_rows[1:]:
            symbol = row.find('td').text.strip('\n')
            yield symbol