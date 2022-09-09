import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import MyList from './components/MyList.vue'
import MyArticle from './components/MyArticle.vue'
import MyNavBar from './components/NavBar.vue'

const app = createApp(App)

app.component("MaListe", MyList)
app.component("MonArticle", MyArticle)
app.component("MonMenu", MyNavBar)

app.use(router)

app.mount('#app')