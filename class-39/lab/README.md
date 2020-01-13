# LAB - Combined Reducers, Drag and Dro

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Practice - Drag and Drop

Create a reusable Drag and Drop component system with the API described below. Ideally, this would be generic enough for you put on NPm and could be used in any application that you write in the future.

The starter code provided is optimistic -- it is wired up to use your components as shown below, and should work once you've gotten your work completed.

`<Draggable>` Wrapper around components you want to be able to drag

* `payload` property contains data to pass to the drop zone when this is dropped.
* `dragClass` property contains the name of the class to be applied while the element is being dragged.
```
<Draggable dragClass="moving" payload={someDataYouCareAbout}>
  <MyComponent>...</MyComponent>
</Draggable>
```

`<Dropzone>` Wrapper around components you want to be able to drop things on

* `onDrop` is the method/function you want to run after a drop happens. This will receive the payload sent by both the drop zone and the draggable element
* `payload` property contains data about this drop zone to pass to the onDrop method after something has been dropped.
* `className` is the name of a CSS Class that will be applied to the DropZone itself
* `hoverClass` is the name of a CSS Class that will be applied while the drop zone is being hovered over.

```
const someDataAboutMe = {
    categoryName: 'foobar'
}

const myDropHandler = (targetPayload, droppedPayload) => {
}

<DropZone 
  className="container" 
  hoverClass="droppable" 
  payload={someDataAboutMe}
  handleDrop={myDropHandler} 
  hoverClass="hovering"
>
  <MyContainerThing>...</MyContainerThing>
</Draggable>
```


## Assignment - To Do

### Requirements

### Testing
* tests that ensure the list module functions correctly with error-check parameters

## Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
