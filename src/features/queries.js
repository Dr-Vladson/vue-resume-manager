import {store} from '../store/index'

export async function getResumes (){
    try {
        const resp = await fetch('http://localhost:8888/resumes-simple-list')
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
        const resp = await fetch(`http://localhost:8888/resume-full/${id}`)
        const data = await resp.json()
        console.log(data)
        store.setCurrentFullResume(data)
    }
    catch (error) {
        console.log(error)
    }
}