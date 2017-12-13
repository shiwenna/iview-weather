<style scoped lang="less">
    @import '../styles/base.less';

    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;

    h1 {
        height: 150px;

    img {
        height: 100%;
    }

    }
    h2 {
        color: #666;
        margin-bottom: 200px;

    p {
        margin: 0 0 50px;
    }

    }
    .ivu-row-flex {
        height: 100%;
    }

    }
    .bg-image {
        background-image: url(../images/background.jpg);
        background-size: cover
    }

    .bg-color {
        background-color: rgba(9, 19, 31, .5);
        height: 100%;
        padding: 15px;
    }

    .bg-margin {
        margin: 5px;
    }

    .bg-border {
        border: 1px solid #44ccf3;
        border-radius: 3px;
        box-shadow: 0 1px 6px #b8effb;
        height: 100%;
    }

    .bg-padding {
        padding: 15px;
    }

    .card-bg-color {
        background-color: rgba(255, 255, 255, 0);
        color: #fff;
    }
</style>
<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle" class='bg-image'>
            <Col span="6" class="bg-color">
            <div class="bg-border">
                <template>
                    <Card class="card-bg-color">
                        <p>天气实况</p>
                        <p></p>
                    </Card>
                    <Card class="card-bg-color">
                        <p>天气预报</p>
                    </Card>
                    <Card class="card-bg-color">
                        <p>生活指数</p>
                    </Card>

                </template>
            </div>
            </Col>
            <Col span="12" class="bg-color">
            <div>

            </div>
            </Col>
            <Col span="6" class="bg-color">
            <div>
                <!--<h1>-->
                <!--<img src="../images/logo.png">-->
                <!--</h1>-->
                <!--<h2>-->
                <p>Welcome to your iView demo sssaaa app!</p>
                <Button type="ghost" @click="handleStart">Start iView</Button>
                <!--</h2>-->
            </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        methods: {
            handleStart () {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            }
        }
    }
</script>
