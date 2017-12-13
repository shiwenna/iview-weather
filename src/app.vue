<style scoped>
    @import 'styles/common.css';

</style>
<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data () {
            return {}
        },
        mounted () {
//            $http.post("http://129.1.18.118:9090/ES_Building/esbuilding/public/common/user/login")
//                .then(response => {
//                    console.log(response.dat)})
        },
        beforeDestroy () {

        },
        methods: {

        }
    }
</script>
