// Contact Component
class Contact {
    constructor() {
        this.container = document.getElementById('contact-container');
    }

    static init() {
        const contact = new Contact();
        contact.render();
        return contact;
    }

    render() {
        if (!this.container) return;

        this.container.innerHTML = `
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <!-- Contact Form - Left (40%) -->
                <div class="lg:col-span-2">
                    <form id="contact-form" class="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                        <h3 class="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">Send Me a Message</h3>
                        
                        <div class="mb-6">
                            <label for="firstname" class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                            <input type="text" id="firstname" name="firstname" required 
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                        </div>

                        <div class="mb-6">
                            <label for="lastname" class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                            <input type="text" id="lastname" name="lastname" required 
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                        </div>
                        
                        <div class="mb-6">
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input type="email" id="email" name="email" required 
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                        </div>
                        
                        <div class="mb-6">
                            <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                            <input type="text" id="subject" name="subject" required 
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                        </div>
                        
                        <div class="mb-6">
                            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea id="message" name="message" rows="5" required 
                                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical" placeholder="Write your message here..."></textarea>
                        </div>
                        
                        <button type="submit" class="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            <i class="fas fa-paper-plane mr-2"></i>Send Message
                        </button>
                    </form>
                </div>

                <!-- Contact Info Cards - Right (60%) -->
                <div class="lg:col-span-3">
                    <div class="space-y-4 md:space-y-6">
                        <h3 class="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8">Get In Touch</h3>
                        
                        <!-- Email Card -->
                        <div class="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                                <div class="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-envelope text-white text-xl sm:text-2xl"></i>
                                </div>
                                <div class="min-w-0 flex-1">
                                    <h4 class="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Email</h4>
                                    <a href="mailto:ansranaans52@gmail.com" class="text-sm sm:text-lg font-medium text-white hover:text-yellow-200 transition-colors break-all">
                                        ansranaans52@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Phone Card -->
                        <div class="bg-gradient-to-br from-green-500 via-teal-600 to-cyan-700 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                                <div class="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-phone text-white text-xl sm:text-2xl"></i>
                                </div>
                                <div class="min-w-0 flex-1">
                                    <h4 class="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Phone</h4>
                                    <a href="tel:+923082674261" class="text-sm sm:text-lg font-medium text-white hover:text-yellow-200 transition-colors break-all">
                                        +92308 - 2674 - 261
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Additional Info Card -->
                        <div class="bg-gradient-to-br from-purple-500 via-pink-600 to-red-700 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                                <div class="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i class="fas fa-clock text-white text-xl sm:text-2xl"></i>
                                </div>
                                <div class="min-w-0 flex-1">
                                    <h4 class="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Response Time</h4>
                                    <p class="text-sm sm:text-lg font-medium text-white">
                                        I'll respond within 24 hours
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        this.bindEvents();
    }

    bindEvents() {
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!data.firstname || !data.lastname || !data.email || !data.subject || !data.message) {
            Swal.fire({
                title: 'Error!',
                text: 'Please fill in all fields.',
                icon: 'error',
                confirmButtonColor: '#ef4444',
                confirmButtonText: 'OK'
            });
            return;
        }
        
        // Show success message with Sweet Alert
        Swal.fire({
            title: 'Success!',
            text: 'Your message has been sent successfully. I will get back to you soon!',
            icon: 'success',
            confirmButtonColor: '#3b82f6',
            confirmButtonText: 'Great!',
            background: '#fff',
            color: '#1f2937',
            padding: '2rem',
            backdrop: true,
            didOpen: (modal) => {
                modal.style.borderRadius = '1rem';
            }
        });
        
        // Clear form fields
        e.target.reset();
    }
}
