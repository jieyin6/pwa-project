<template>
    <div class="detail-wrapper">
        <article class="detail-content">
            <header class="detail-title">
                Detail {{$route.params.id}}
            </header>
            <router-link :to="{
                name: 'detailId',
                params: {
                    id: Number($route.params.id) + 1
                }
            }">Detail {{Number($route.params.id)}}</router-link>
            <p>
                lalalalallalallallallal
            </p>
            <router-link to="/">回首页</router-link>
        </article>
    </div>
</template>

<script>
//import axios from 'axios'
import {mapState} from 'vuex'
export default {
    name: 'detail-_id',
    metaInfo () {
        return {
            title: `lavas sample detail ${this.$route.params.id}`,
            titleTemplate: '%s - lavas',
            meta: [
                {name: 'keywords', content: 'lavas sample detail'},
                {name: 'description', content: `lavas sample detail ${this.$route.params.id}`}
            ]
        }
    },
    async asyncData ({store, route}) {
        //let res = await axios(`https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202151849&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`)
        //console.log(res)
        //let condition = res.data.query.results.channel.item.condition
        //console.log(`weather of shanghai: ${condition.text},${condition.temp}`)
        await store.dispatch('detail/setWeather', {woeid: 2151849})
    },
    computed: {
        ...mapState('detail', [
            'weather'
        ])
    },
    created () {
        console.log(`weather of shanghai: ${this.weather.text},${this.weather.temp}`)
    }
}
</script>

<style lang="stylus" scoped>
.derail-content
    font-size 16px
    line-height 30px
    margin-top 30px
    .derail-title
        margin-bottom 20px
        padding 10px 0
        font-size 36px
        font-weight bold
</style>
