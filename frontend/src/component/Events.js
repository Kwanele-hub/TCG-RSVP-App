import React, { Component } from 'react'
import NameForm from './Forms'
class Events extends Component {
constructor(props){
    super(props)
    this.state = { Events: [
       {
           id: 0, name: "TEDx talks", description: "Did you know that the iconic idea-sharing forum TEDx started as a campus event at USC in 2009?, Now, the platform encourages campuses to start their own version of the digitally evolved lecture series. Capturing such talks on video makes for powerful, potentially viral social media. For details on how to start a campus TEDx, visit the website.",
           date: "09-11-2020", venue: "8 Incubation Drive Riverside View Ext 15, Fourways, Midrand, 2021,room15"
       },
       {
           id: 1, name: "Create a student mentorship program", description: "Look to Big Brother/Big Sister programs for inspiration to pair up senior students with freshman. You can also be more specific with the pairings, like pairing first-gen college students with older first-gen students who understand their experience, or creating an LGBTQI+ mentorship program or event.", date: "02-12-2020", venue:
               " Montecasino Blvd, Fourways, Johannesburg, 2055"
       },
       { id: 2, name: "Community service events", description: "Millennials love expressing their values online, but 80% of them feel it’s essential for people to come together in person to promote positive change. Invite them to be that change. Team up with an organization outside of campus to promote and orchestrate a meaningful community event. For instance, clean up a local beach, organize a themed open mike, or raise awareness with a special class where all proceeds go to a cause.", date: "11-12-2020", venue: "Olievenhout Ave, Northgate, Randburg, 2162" },
    ]
    
}
}

    render() {
        return (
            <div>
                <h1>TCG RSVP App</h1>
      <NameForm/>
                {this.state.Events.map((event)=><div>{event.name}</div>)}
            </div>

        )
    }
}

export default Events

