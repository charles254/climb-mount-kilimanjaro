---
name: ScientificOnPageSEO
description: A data-driven On-Page SEO methodology based on the "Match the Winner" principles of SEO Fight Club.
---

# Scientific On-Page SEO Methodology

This skill provides a rigorous, evidence-based approach to on-page optimization. It rejects "general best practices" in favor of mathematical correlation with top-ranking competitors for specific keywords.

## 1. Core Principles

### A. The "Match the Winner" Rule
Google's algorithm is a black box, but the results are public. If the top 3-5 pages for a keyword share specific traits (word count, keyword density, entity usage), those traits are the "entry fee" for ranking.

### B. Factor Diversity vs. Keyword Stuffing
*   **Factor Measurement**: A "factor" can be anything from H1 usage to the number of images.
*   **The Zero Rule**: If top competitors use 20 different technical factors and you only use 5, you have 15 "Zeros." A priority of this skill is to eliminate zeros.

### C. Entity Diversity
Relevance is determined by the *variety* of related entities (concepts, objects, authors) present on the page. 

## 2. Implementation Steps

### Step 1: Competitor extraction
Identify the Top 5 organic competitors. Exclude Amazon, Wikipedia, or other outliers if they rank purely on domain authority.

### Step 2: Zero-Factor Audit
Analyze the following elements for all 5 competitors:
1.  **Tag Presence**: Do they all have H2s? Images? Tables? Bold text?
2.  **Schema Type**: Are they using Article, Product, or FAQ schema?
3.  **Entity Coverage**: Use NLP tools (or the `extract_entities` script) to find shared concepts across their content.

### Step 3: Density Tuning (The Mathematical Match)
Do not use a fixed 2% density.
*   **Formula**: `(Competitor1_Density + Competitor2_Density + Competitor3_Density) / 3 = Target_Density`
*   **HTML Tag Density**: Check the total occurrences of the keyword in the entire HTML source. Top pages often have thousands of occurrences hidden in alt text, meta data, and aria labels.

## 3. Advanced Tactical Tuning

### Maximum Limit Identification
The transcript shows that some #1 spots utilize an extreme volume of keywords (up to 38,000+ per page). While not recommended for all niches, this indicates that "too much" is often much higher than standard tools suggest. If you are stuck at #10, try gradually increasing your keyword count in technical tags (Alt, Meta) to match the leader.

### Seasonal Core Update Adjustments
During Core Updates:
1.  **Monitor Off-Page Dial**: Google often shifts the weight toward authority (backlinks).
2.  **Hold On-Page Steady**: Do not make drastic On-Page changes *during* a Core Update (the "beehive" state). Wait for the baseline to return before retuning based on new leader data.

## 4. Required Scripts
*   `scripts/analyze_density.py`: Calculates average density across top URLs.
*   `scripts/check_zeros.py`: Identifies missing tags based on competitor analysis.
