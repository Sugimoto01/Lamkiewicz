import requests
from bs4 import BeautifulSoup
result = requests.get("https://en.wikipedia.org/wiki/Main_Page")
src = result.content
soup = BeautifulSoup(src, 'lxml')

urls = []
for li_tag in soup.find_all('li'):
       a_tag = li_tag.find('a')
        
       if a_tag is not None and "href" in a_tag.attrs:
           urls = a_tag.get("href")

print(urls)