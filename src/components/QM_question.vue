<template>
    <span>
        <h4>{{QM_question.question}}</h4>
        <div v-for="QM_awnser in QM_question.awnsers" :key="QM_question.id + QM_awnser.id">
            <label :for="'checkbox' + QM_question.id + QM_awnser.id">
                {{QM_awnser.text}}
                <input type="radio" v-model="QM_QuestionAwnsers" :value="QM_awnser.id" :name="QM_question.id" :id="'checkbox' + QM_question.id + QM_awnser.id" required>
            </label>
        </div>
        <br>
        <input type="button" v-if="!QM_isLast" v-on:click="$emit('next-question')" value="Question suivante" />
        <input v-else type="submit" v-on:click="checkResultForm" value="Valider ces réponses" />
    </span>
</template>
<script>
    export default {
        name: "QM_question",
        props : {
            QM_question: null,
            QM_response: null,
            QM_isLast: null,
        },
        data() {
            return {
                QM_QuestionAwnsers : []
            }
        },
        methods : {
            checkResultForm : function(){

            }
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