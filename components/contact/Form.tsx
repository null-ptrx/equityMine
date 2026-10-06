"use client";
export function Form() {
  

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    const res = await fetch("/api/contact", {
      method : "POST", 
      headers : {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      form.reset();
    }
    
  } 
  return (
    <section aria-labelledby="form-heading" className="bg-white">
      <div className="max-w-6xl mx-auto px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-20 flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-10 shadow-sm flex flex-col gap-8">
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h2 id="form-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Request a call back</h2>
            <p className="text-lg text-gray-600">Share a few details and we'll get in touch at a time that suits you.</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Full Name</label>
              <input 
    
                type="text" 
                id="fullName" 
                name="fullName" 
                autoComplete="name" 
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
                placeholder="Jane Doe"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="mobile" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Mobile Number</label>
              <input 
           
                type="tel" 
                id="mobile" 
                name="mobile" 
                autoComplete="tel"
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
                placeholder="+91 98765 43210"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                autoComplete="email"
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
                placeholder="jane@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="goal" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Investment Goal</label>
              <input 
                type="text" 
                id="goal" 
                name="goal" 
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
                placeholder="Retirement, Child's Education, etc."
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Message (Optional)</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow resize-y"
                placeholder="How can we help you?"
              ></textarea>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button 
              type="submit" 
              className="w-full sm:w-auto self-start bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Request call
            </button>
            <p className="text-sm text-gray-500 leading-relaxed">
              By submitting you agree to be contacted about your enquiry. We never share your details with third parties or sell them to anyone. See the privacy policy for what we keep and how to have it removed.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
