const filterObj=(obj, ...allowedFields)=>{

    const newObj={};
    Objects.keys(obj).forEach(el=> {
        if(allowedFields.includes(el)) newObj[el]=obj[el]
    });
}

module.exports =filterObj;