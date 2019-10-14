<template>
    <span>
        <h4>{{QM_question.question}}</h4>
        <div v-for="QM_awnser in QM_question.awnsers">
            <label :for="'checkbox' + QM_question.question + QM_awnser.text">
                {{QM_awnser.text}}
                <input type="checkbox" :id="'checkbox' + QM_question.question + QM_awnser.text">
            </label>
        </div>
        <br>
        <button v-on:click="$emit('next-question')">Répondre</button>
    </span>
</template>

<script>
    export default {
        name: "QM_question",
        props : {
            QM_question: null,
            QM_response: null
        },
        methods : {
        }

    }
</script>

<style scoped>
    span{
        display: inline-table;
        width: 100vw;
        height: 65vh;
        padding-top: 25vh;
        text-align: center;
    }
</style>