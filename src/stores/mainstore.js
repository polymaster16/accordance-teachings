import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { client } from '../client'

export const useMainstore = defineStore('mainstore', () => {
  const count = ref(0)
  const categories = ref([])
  const pages = ref([])
  const blog = ref([])

  const loadingCategories = ref(true)
  const loadingPages = ref(true)
  const loadingBlog = ref(true)

  async function getCategories(){
    categories.value =  await client.fetch('*[_type == "category"]');
    console.log(categories.value)
    loadingCategories.value = false    
  }

  async function getPages(){
    pages.value =  await client.fetch('*[_type == "pages"]');
    console.log(pages.value)
    loadingPages.value = false    
  }
  async function getBlog(){
    blog.value =  await client.fetch('*[_type == "post"]{title, categories, body, mainImage, slug, publishedAt, author}');
    console.log(blog.value)
    loadingBlog.value = false    
  }
 
 
 

  return { count, categories, loadingCategories, getCategories, getPages, getBlog, blog, pages, loadingBlog, loadingPages}
})
