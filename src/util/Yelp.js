const apiKey = 'ZC3X5-JaXcQrgg5Pz3Aot6aGhqPL47BbLqNMu_VmhuwZLj72ed92FqJHT1Ju-KHRimh3790oafvt6vF0pRj8bTjjLMBy16ztpMVrnaH9YuDo1wlmPtITlvr7Eg70XnYx'

const Yelp = {
    search(term,location,sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}location=${location}&sort_by=${sortBy}`,
        {
            headers:{
                Authorization:`Bearer ${apiKey}`
            }
        }).then(response =>{
            return response.json();
        }).then(jsonResponse =>{
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map((business =>{
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zipCode,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    }
                }))
            }
        })
    }
}

export default Yelp