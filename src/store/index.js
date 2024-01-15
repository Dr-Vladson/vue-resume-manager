import { reactive } from 'vue'

export const store = reactive({
    resumesSimpleArray: [],
    currentFullResume : {},
    setResumesSimpleArray(resumesSimpleArray) {
        this.resumesSimpleArray = resumesSimpleArray
    },
    addToResumesSimpleArray (fullResume){
        const {id, name, position} = fullResume
        this.resumesSimpleArray.push({id, name, position})
    },
    setCurrentFullResume(fullResume){
        this.currentFullResume = fullResume
    }
})