After testing the api with an api key:
https://api.exchangerate.host/latest?base=NGN&symbols=USD

Result:
{"success":false,"error":{"code":103,"type":"invalid_api_function"}}

Read their documentation and realise some changes have been made.

This worked.

https://api.exchangerate.host/change?currencies=USD,NGN

{"success":true,"terms":"https:\/\/currencylayer.com\/terms","privacy":"https:\/\/currencylayer.com\/privacy","change":true,"start_date":"2025-06-03","end_date":"2025-06-04","source":"USD","quotes":{"USDUSD":{"start_rate":1,"end_rate":1,"change":0,"change_pct":0},"USDNGN":{"start_rate":1582.24939,"end_rate":1583.010016,"change":0.7606,"change_pct":0.0481}}}