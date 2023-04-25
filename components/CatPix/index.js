import React, { useState } from "react";
import { Button, Image, ScrollView } from "react-native";

const CatPix = () => {
    const [pixState, setPixState] = useState(false)

    return(
        <>
        <ScrollView>
        {pixState && <><Image
        source ={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Britskorthaar-64091287828362D7bA.jpg'
        }}
        style= {{width: 200, height: 200}}
        />
        <Image
        source ={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Britskorthaar-64091287828362D7bA.jpg'
        }}
        style= {{width: 200, height: 200}}
        />
        <Image
        source ={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Britskorthaar-64091287828362D7bA.jpg'
        }}
        style= {{width: 200, height: 200}}
        />
        <Image
        source ={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Britskorthaar-64091287828362D7bA.jpg'
        }}
        style= {{width: 200, height: 200}}
        />
        <Image
        source ={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Britskorthaar-64091287828362D7bA.jpg'
        }}
        style= {{width: 200, height: 200}}
        />
        <Image
        source ={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Britskorthaar-64091287828362D7bA.jpg'
        }}
        style= {{width: 200, height: 200}}
        />
        <Image
        source ={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Britskorthaar-64091287828362D7bA.jpg'
        }}
        style= {{width: 200, height: 200}}
        />
        <Image
        source ={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Britskorthaar-64091287828362D7bA.jpg'
        }}
        style= {{width: 200, height: 200}}
        />
        <Image
        source ={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Britskorthaar-64091287828362D7bA.jpg'
        }}
        style= {{width: 200, height: 200}}
        />
        </>}
        <Button
            onPress={() => setPixState(!pixState)}
            title= {!pixState ? "Want to see a kitty?" : "Woah! Put that chonker away!!!"}
        />
        </ScrollView>
        </>
    )
}

export default CatPix