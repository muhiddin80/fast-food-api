# Fast-food restorani uchun BackEnd API for 🍔

## Loyhaning maqsadi :🎯
-Birorbir fast-food restoranti uchun menyularni ko'rish va ovqatlarga buyurtma berish uchun ishlab chiqilgan BackEnd API

## Funksional talablar ⚙:
- Barcha taomlarni category'larga bo'lishi kk. Misol , burgerlar , pitsalar va hkz.
- Har bir taom biror category'larga mansub bo'lishi kerak.
- Taomning 1 ta rasmi, nomi, narxi, description bo'lishi kerak.
- Foydalanuvchi ro'yxatdan o'tmagan holatda ham category va taomlarni ko'rishi kerak
- Foydalanuchi email va name bilan ro'yxatdan o'tadi
- Profiliga o'tish email orqali bo'ladi
- Foydalanuvchi savatga mahsulotlar qo'sha olishi kk
- Foydalanuvchi bir necha sakazlar qila olishi kk
- Foydalanuvchi o'z profilida zakazlarni ko'ra olishi kk
- Foydalanuvchi profilini yangilay olishi kk

## Nofunksional talablar:
- Tezlik
- Xavfsizlik
- Kengaya oladigan

## Database models:

1. Category:
    - id
    - name
    - createdAt
    - updatedAt

2. Food:
    - id 
    - name
    - price
    - description
    - imageUrl
    - category_id
    - createdAt
    - updatedAt

3. User:
    - id 
    - name
    - email
    - imageUrl
    - createdAT
    - updatedAt

4. Orders:
    - id
    - createdAt
    - total_price
    - userId (FK)

5. OrderItem:
    - count
    - orderId (FK)
    - foodId (FK)

