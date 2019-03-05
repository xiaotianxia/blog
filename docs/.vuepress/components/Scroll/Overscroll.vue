<template>
    <div class="wrapper">
        <div class="scroll-wrapper">
            <div class="list-wrapper">
                <ul>
                    <li v-for="(item, index) in 50">{{index + 1}}</li>
                </ul>
            </div>

            <div class="list-wrapper overscroll-contain">
                <ul>
                    <li v-for="(item, index) in 50">{{index + 1}}</li>
                </ul>
            </div>
        </div>
        <div class="titles">
            <h4>before</h4>
            <h4>after</h4>
        </div>
    </div>
</template>

<style scoped>
    .wrapper {
        margin: 10px 0;
        text-align: center;
    }

    .scroll-wrapper,
    .titles {
        display: flex;
    }
    .list-wrapper,
    .titles h4 {
        flex-basis: 47%;
    }

    .list-wrapper {
        width: 250px;
        height: 300px;
        border: 1px solid #3eaf7c;
        overflow: hidden;
    }

    .list-wrapper:nth-child(1) {
        margin-right: 10px;
    }

    .list-wrapper:hover {
        overflow: auto;
    }

    .overscroll-contain {
        overscroll-behavior: contain;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        padding: 0 10px;
    }

    li {
        height: 32px;
        line-height: 32px;
        border-bottom: 1px solid #ecf0f1;
        text-align: left;
    }

    .titles h4 {
        display: inline-block;
        width: 250px;
        margin: 10px 0;
    }
</style>

