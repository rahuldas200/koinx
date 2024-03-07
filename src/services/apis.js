const BASE_URL = "https://api.coingecko.com/api/v3"

export const currencyendpoints = {
    TRENDING_API:BASE_URL + "/search/trending",
    PERFORMENCE_API : BASE_URL+"/coins/markets?vs_currency=inr&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
};



