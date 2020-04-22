export default function(context){
  // console.log( context.store.state.auth.loggedIn);

  if(!context.store.state.auth.loggedIn){
    context.redirect('/');
  }
}
