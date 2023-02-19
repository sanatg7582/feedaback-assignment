export function fetchFetureToggle(){
    return new Promise(resolve=>{
        const featureToggles = {
            isFeedbackButtonEnabled:true
        }
        setTimeout(resolve,100,featureToggles)
    })
}