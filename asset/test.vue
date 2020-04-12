<template>
    <div class="search_frame">
        <form id="search" action="">
            <label for="user_input">
                <span class="sr_only">Search</span>
                <img src="../assets/search-icon-512.png"
                     alt="search." width="16"
                     height="16"></label>
            <input v-model="searchTerm" id="user_input" class="no_defaultstyle" name="search_text" placeholder="Search" type="text">
            <!--<div v-for="page in filteredPages">
                <button type="button" @click="$emit('change-page', index)">{{page.title}}</button>
            </div>-->
        </form>
    </div>
</template>
<script>
    export default {
        name: 'Search',
        props: ['pages'],
        watch:{
            searchTerm(){
                this.search();
            }
        },
        methods: {
            search() {
                if(this.searchTerm.length>1){
                    this.filteredPages = this.pages.filter(page => {
                        return page.title.includes(this.searchTerm);
                    });
                } else {
                    this.filteredPages = this.pages;
                }
                this.$emit('filtered-pages', this.filteredPages)
            },

        },
        data() {
            return {
                searchTerm: '',
                filteredPages:[]
            }
        }
    }
</script>
<style scoped></style>