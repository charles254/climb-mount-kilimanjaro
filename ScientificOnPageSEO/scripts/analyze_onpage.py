import requests
from bs4 import BeautifulSoup
from collections import Counter
import re

def analyze_onpage(urls, keyword):
    keyword = keyword.lower()
    results = []
    
    for url in urls:
        print(f"Analyzing {url}...")
        try:
            response = requests.get(url, timeout=10)
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # 1. Word Count
            text = soup.get_text()
            words = re.findall(r'\w+', text)
            word_count = len(words)
            
            # 2. Keyword Count in Text
            kw_count = text.lower().count(keyword)
            density = (kw_count / word_count) * 100 if word_count > 0 else 0
            
            # 3. Tag checks (The "Zero" identifiers)
            tags = {
                "h1": len(soup.find_all('h1')),
                "h2": len(soup.find_all('h2')),
                "images": len(soup.find_all('img')),
                "bold": len(soup.find_all(['b', 'strong'])),
                "schema": 1 if soup.find_all('script', type='application/ld+json') else 0
            }
            
            results.append({
                "url": url,
                "word_count": word_count,
                "kw_count": kw_count,
                "density": f"{density:.2f}%",
                "tags": tags
            })
        except Exception as e:
            print(f"Failed to analyze {url}: {e}")
            
    return results

if __name__ == "__main__":
    target_urls = [
        "https://usernameproperties.com/property-category/land-for-sale-in-ngong/",
        "https://hata.co.ke/plots-for-sale/ngong",
        "https://www.propertypro.co.ke/property-for-sale/land/kajiado/ngong",
        "https://kenyapropertycentre.com/for-sale/land/kajiado/ngong/",
        "https://www.privatepropertykenya.com/land-for-sale/ngong"
    ]
    target_kw = "land for sale ngong"
    
    if target_urls:
        analysis = analyze_onpage(target_urls, target_kw)
        print("\n--- Scientific On-Page Audit ---")
        for res in analysis:
            print(f"\nURL: {res['url']}")
            print(f"Words: {res['word_count']} | KW Count: {res['kw_count']} | Density: {res['density']}")
            print(f"Tags: {res['tags']}")
    else:
        print("Please provide URLs in the script to run analysis.")
