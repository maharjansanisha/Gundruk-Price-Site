import scrapy
import re

class GundukSpider(scrapy.Spider):
    name = 'gunduk'
    start_urls = ['https://kalimatimarket.gov.np/price'] # replace with the URL of the website to scrape

    def parse(self, response):
        price_min = response.css('#commodityPriceParticular td:contains("गुन्दुक") + td + td').extract_first()
        price_max = response.css('#commodityPriceParticular td:contains("गुन्दुक") + td + td + td').extract_first()
        price_avg = response.css('#commodityPriceParticular td:contains("गुन्दुक") + td + td').extract_first()

        # use regex to extract text content within <td> tags
        price_min = re.search(r'<td>(.*?)</td>', price_min).group(1)
        price_max = re.search(r'<td>(.*?)</td>', price_max).group(1)
        price_avg = re.search(r'<td>(.*?)</td>', price_avg).group(1)

        yield {
            'item': 'गुन्दुक',
            'price_min': price_min,
            'price_max': price_max,
            'price_avg': price_avg
        }
