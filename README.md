
## live_url :  https://school-api.salontrainingpro.app

# --> User
#   ---- admin---
email:sampodnath1122@gmail.com
password:112233

Admin test token :
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA3MzdhNmNiLWQ4M2QtNDk1Zi1hNTAzLTg2ZmIwODU0YjQ1MCIsIm5hbWUiOiJzYW1wb2RuYXRoIiwiZW1haWwiOiJzYW1wb2RuYXRoMTEyMkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRDdklmMmdsN3JoVE9iQ1hkU0JCTGsuT090TU9RYkRuYUUuVjB0b3dlZzQxLlhzYzJsWVlnbSIsInJvbGUiOiJhZG1pbiIsImNvbnRhY3RObyI6IjEyNzQwNTAiLCJhZGRyZXNzIjoiRGhha2EsIEJhbmdsYWRlc2hEIiwicHJvZmlsZUltZyI6Ii9VU0VSL3VzRGVybGFzdDIuanBnIiwiaWF0IjoxNjk2ODc5NzgxLCJleHAiOjE3Mjg0MTU3ODF9.B6xsfbXisZtqzVaAbM_BW-PRTKSS2VZSrDClxYeARkc

- api/v1/auth/signup -->(POST)
- api/v1/users -->(GET)
- api/v1/users/86781adf-445a-4d5f-9d3e-75bbf4a5358c -->(One GET)
- api/v1/users/86781adf-445a-4d5f-9d3e-75bbf4a5358c -->(PATCH)
- api/v1/users/9efcf21e-6688-4f9f-b548-63c145b429e1 -->(DELETE)
- api/v1/profile -->(GET)

# --> Category

- api/v1/categories/create-category -->(POST)
- api/v1/categories -->(GET)
- api/v1/categories/b51d40eb-535e-4f37-bd63-1585216b1965 -->(One GET)
- api/v1/categories/b51d40eb-535e-4f37-bd63-1585216b1965 -->(PATCH)
- api/v1/categories/b987aa3b-f89f-4793-aa7f-d521c326e8a0 -->(DELETE)

# --> Books

- api/v1/books/create-book -->(POST)
- api/v1/books -->(GET)
- api/v1/books?page=1&size=3 -->(GET singel categoryId)
- api/v1/books/75fd11c1-35ac-49ee-b11f-848b5ab77fdc -->(GET One id)
- api/v1/books/75fd11c1-35ac-49ee-b11f-848b5ab77fdc -->(PATCH)
- api/v1/books/75fd11c1-35ac-49ee-b11f-848b5ab77fdc -->(DELETE)

# --> Orders

customer account
email:gobinda@gmail.com
password:112233
token:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdmZTg0NmUyLWEzNTktNDIwZS05NzE1LWYxOWY1Yjc2OGM2NyIsIm5hbWUiOiJHb2JpbmRhIG5hdGgiLCJlbWFpbCI6ImdvYmluZGFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkTFJqR1EyaHJXZlJRTTk1YlkuS2dLZTNJa3EyVkplcU1HUTZpLkNhdzBVYVIvNUpFZnk4aFMiLCJyb2xlIjoiY3VzdG9tZXIiLCJjb250YWN0Tm8iOiIxMjM0NTQ1NTY3NDA1MCIsImFkZHJlc3MiOiJEaGFrYSwgQmFuZ2xhZGVzaEQiLCJwcm9maWxlSW1nIjoiL1VTRVIvdXNEZXJsYXN0Mi5qcGciLCJpYXQiOjE2OTY4Nzk2MjksImV4cCI6MTcyODQxNTYyOX0.RYh1dWmPg83uPxBWch1EmoHurCAvXvK2iV88aMYEZsE

- api/v1/orders/create-order -->(POST)
- api/v1/orders  -->(GET)
- api/v1/orders/25adb56a-8fef-4b7f-8e81-78e21f1403aa -->(Get by One orderId)
