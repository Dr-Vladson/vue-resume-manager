import {store} from '../store/index'
const baseURL = 'http://localhost:8888'

export async function getResumes (){
    try {
        const resp = await fetch(baseURL + '/resumes-simple-list')
        const data = await resp.json()
        console.log(data)
        store.setResumesSimpleArray(data)
    }
    catch (error) {
        console.log(error)
    }
}
export async function getFullResume (id){
    try {
        const resp = await fetch(baseURL + `/resume-full/${id}`)
        const data = await resp.json()
        console.log(data)
        store.setCurrentFullResume(data)
    }
    catch (error) {
        console.log(error)
    }
}
export async function createResume (resume){
    try {
        const resp = await fetch(baseURL + '/create-resume', {
                method: 'POST',
                body:JSON.stringify(resume),
                headers:{
                    'Content-Type':'application/json'
                }
        })
        const data = await resp.json()
        console.log(data)
        const {id, name, position} = data
        store.addToResumesSimpleArray({id, name, position})
    }
    catch (error) {
        console.log(error)
    }
}