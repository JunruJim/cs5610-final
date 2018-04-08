# Final

This is the final project for CS5610. Members including Yuxin Han, Yiyang Zhang and Junru Xu.

### routing

login	/login

register	/register

User-edit	/profile



rst-list		/home

rst-search	/search

Rst-edit		/rst/:rstId

Rst-new		/rst/new



faq-list		/faq

Faq-edit		/faq/:faqId

Faq-new		/faq/new



Review-list	/review

Review-edit	/review/:reviewId

Review-new	/review/new



blog-list		/blog

Blog-edit	/blog/:blogId

Blog-new	/blog/new





##Models

users

restaurants

reviews

FAQs

blogs (long review)

## Users

**admin**: CRUD users/restaurants/reviews/FAQs/blogs

anonymous: R restaurants, R FAQs

restaurant owner: CRUD restaurants, CR FAQs

customer: CR reviews, R restaurants

