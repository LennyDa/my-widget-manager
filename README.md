#### Start my-widget-manager
<pre>
npm i 
npm start;
</pre>

#### Components 
<pre>
App - main wrapper.

Widget Manager - initiates app page. 
Includes all components and has the functionality to control and pass states to children.

Modal - form to allow the user edit existing widget or add new one.
Modal is rendered in portal in order to keep on proper functionality of the component as a popup.

View - shows current widget on the right side of the page. Includes edit button for viewed widget.
Includes simple test for rendered values of fields.

WidgetList - manages the widget list.
Allow the user to edit, view and delete existing widget or add new one.

EditButton - reusable component for widget edit. In use in List component and view component.

</pre>

#### Hooks
<pre>
useLocalStorage - used in order to save user data.      
</pre>

#### Utils
<pre>
modalUtils - includes checks of name and number in modal form.

viewUtils - includes small package for translating magic number to words for view component.
</pre>

###assets
<pre>
images - all images are Bootstrap svg icons for add/edit/view/delete options in the app. 

styles/_commonStyle - includes mixins for buttons and breakpoints: phone-landscape and
phone-portrait.

</pre>

