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