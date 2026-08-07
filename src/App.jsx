import Home from './pages/Home';
import { supabase } from './supabaseClient'

console.log('Supabase client:', supabase)

function App() {
  return (
    <div className="min-h-screen bg-cream text-espresso">
      <Home />
    </div>
  );
}

export default App;