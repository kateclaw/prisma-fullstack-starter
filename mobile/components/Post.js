import React from "react";
import {
    Panel,
    View,
} from "react-native"



class Post extends React.Component{
    render () {
        return (
            <View>
              <Panel bsStyle="info">
                 <Panel.Heading>
                     <Panel.Title componentClass="h3">{this.props.author.name}
        
                     </Panel.Title>
                    </Panel.Heading>
                 <Panel.Body>{this.props.text}</Panel.Body>
                </Panel>
        
            </View>
        )
    }
}

export default Post