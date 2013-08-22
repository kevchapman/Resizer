#Resizer
JS class to hold an array of functions
##Usage
``` html
<script>
	resizer = new Resizer({
		delay: 300 // the default, ms delay call on window.resize to stop functions firing to often
	});
	resizer.add(function(){
		// code to be called on resize
		// this is set to the resizer
	});
</script>
```
## API
Props
w: the width of the window
b: jQuery reference to 'body'