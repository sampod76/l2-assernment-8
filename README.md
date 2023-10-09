


# --> User
#   ---- admin---
email:SampodNath@gmail.com
password:112233

Admin test token :
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg2NzgxYWRmLTQ0NWEtNGQ1Zi05ZDNlLTc1YmJmNGE1MzU4YyIsIm5hbWUiOiJTYW1wb2QgY2hhbmRyYSBuYXRoIDQiLCJlbWFpbCI6IlNhbXBvZE5hdGhAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkekxNYzFlYks0ZEZHbXoyZzJlMzcyTzkxNnc3aVhQM0hvMWpvUUwwNGx0bzE2Tm80cS9JS0MiLCJyb2xlIjoiYWRtaW4iLCJjb250YWN0Tm8iOiIxMjM0NTY3NDUwIiwiYWRkcmVzcyI6IkRoYWthLCBCYW5nbGFkZXNoIiwicHJvZmlsZUltZyI6Ii9VU0VSL3VzZXJsYXN0Mi5qcGciLCJpYXQiOjE2OTY4NzU3NTMsImV4cCI6MTcyODQxMTc1M30.8SNhCnZnUyMtZ3kNCFvS6-Z9vXkafkoigrGj_fO0goo

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
email:spmidnos@gmail.com
password:112233
token:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJkOGU2ZjBhLTIzYTktNGRhZC1hZmM1LWI2YjViYWNlNzUyNSIsIm5hbWUiOiJTb21hbmlkayBuYXRoIiwiZW1haWwiOiJzcG1pZG5vc0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCQ0UWpMU08wdWt4VUNFZGZwL0pmUk1lRTkvYzBtYWtWVS5YMzh4QmpSSm5wbUQxdmFuRzFqYSIsInJvbGUiOiJjdXN0b21lciIsImNvbnRhY3RObyI6IjEyMzQ1Njc0MDUwIiwiYWRkcmVzcyI6IkRoYWthLCBCYW5nbGFkZXNoRCIsInByb2ZpbGVJbWciOiIvVVNFUi91c0Rlcmxhc3QyLmpwZyIsImlhdCI6MTY5Njg3NTcxMCwiZXhwIjoxNzI4NDExNzEwfQ.yTaJZIVB_MpoVJlT-ksQ3PFqC9YZLRKRhNkRQ8d2lPw

- api/v1/orders/create-order -->(POST)
- api/v1/orders  -->(GET)
- api/v1/orders/25adb56a-8fef-4b7f-8e81-78e21f1403aa -->(Get by One orderId)
