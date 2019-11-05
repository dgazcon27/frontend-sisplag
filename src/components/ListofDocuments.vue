<template>
    <div id="wrapper">
        <div id="main">
            <div class="inner">
                <div>
                    <table class="table">
                      <thead class="thead-dark">
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Nombre</th>
                          <th scope="col">% Coincidencia</th>
                          <th scope="col">Fecha de creacion</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="doc in documents">
                          <th scope="row">{{doc.id}}</th>
                          <td><a :href="doc.url" target="_blank">{{doc.name}}</a></td>
                          <td>{{doc.avg}}%</td>
                          <td>{{parseDate(doc.createdAt)}}</td>
                        </tr>
                      </tbody>
                    </table>
                    <nav aria-label="Page navigation example">
                      <ul class="pagination">
                        <li class="page-item" v-if="isPrevious">
                            <a class="page-link" v-on:click="getDocuments(previousPage)">Previous</a>
                        </li>
                        <li class="page-item" v-for="(page, index) in pages">
                            <a class="page-link" v-on:click="getDocuments(index)">{{index+1}}</a>
                        </li>
                        <li class="page-item" v-if="isNext">
                            <a class="page-link" v-on:click="getDocuments(nextPage)">Next</a>
                        </li>
                      </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SpHeader from './layout/Header.vue';
import SpSidebar from './layout/Sidebar.vue';
import fileServices from '../services/fileServices';
import dateMixin from '../mixins/dateMixin';

export default {

  name: 'ListofDocuments',
  components: {
     SpHeader,
     SpSidebar,
  },
  data () {
    return {
        documents: [],
        currentPage: 0,
        pages: 1,
        next: 1,
        back: 1
    }
  },
  created() {
    this.$store.dispatch('changeHeader' ,{
      name: 'Documentos'
    })
  },
  computed: {
    isNext() {
        return (this.currentPage+1 < this.pages);
    },
    isPrevious() {
        return (this.currentPage > 0);
    },
    nextPage() {
        let nextP = this.pages;
        if (this.currentPage + 1 < this.pages) {
            nextP = this.currentPage + 1;
        }
        return nextP
    },
    previousPage() {
        let prevP = 0;
        if (this.currentPage-1 > 0) {
            prevP = this.currentPage -1;
        }
        return prevP;
    }
  },
  mixins:[dateMixin],
  methods: {
    getDocuments(page) {
        fileServices.getDocuments(page*10)
            .then(res => {
                this.currentPage = page;
                this.documents = res.response;
                this.pages = Math.ceil(res.count/10);
            })
            .catch(err => {
                console.log(err)
            })
    },
  },
  mounted() {
    this.getDocuments(0)
  },
}
</script>

<style lang="css" scoped>
    #wrapper {
        margin-top: 30px;
    }
</style>