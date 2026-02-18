document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('hostel-search');
    const resultsContainer = document.getElementById('search-results');
    const aiChatBtn = document.getElementById('ai-chat-trigger');

    // Mock Database for Search
    const hostels = [
        { name: "Nova Premium Residency", distance: "200m", price: "₹12k/mo", tag: "Highly Rated" },
        { name: "Global Boys Hostel", distance: "450m", price: "₹8.5k/mo", tag: "Budget" },
        { name: "Elite Women's PG", distance: "600m", price: "₹10k/mo", tag: "Secure" },
        { name: "Green Park Stay", distance: "1.2km", price: "₹7k/mo", tag: "Greenery" }
    ];

    // Search Logic
    searchInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        
        if (val.length > 0) {
            // Filter and take top 3 results
            const filtered = hostels
                .filter(h => h.name.toLowerCase().includes(val))
                .slice(0, 3);

            if (filtered.length > 0) {
                resultsContainer.innerHTML = filtered.map(h => `
                    <div class="result-item p-4 cursor-pointer group">
                        <div class="flex justify-between items-center">
                            <div>
                                <h4 class="text-sm font-bold text-white group-hover:text-[#6C5CE7] transition-colors">${h.name}</h4>
                                <p class="text-[10px] text-gray-500 uppercase tracking-wider">${h.distance} from Engineering Block</p>
                            </div>
                            <div class="text-right">
                                <p class="text-xs font-mono text-[#6C5CE7]">${h.price}</p>
                                <span class="text-[9px] bg-white/5 px-2 py-0.5 rounded border border-white/10 text-gray-400">${h.tag}</span>
                            </div>
                        </div>
                    </div>
                `).join('');
                resultsContainer.classList.remove('hidden');
            } else {
                resultsContainer.innerHTML = `<div class="p-4 text-xs text-gray-500">No hostels found nearby.</div>`;
                resultsContainer.classList.remove('hidden');
            }
        } else {
            resultsContainer.classList.add('hidden');
        }
    });

    // Close search on click-away
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target)) resultsContainer.classList.add('hidden');
    });

    // AI Chatbot Interaction
    aiChatBtn.addEventListener('click', () => {
        alert("EduNOVA AI Agent: I've detected you're looking for housing. Would you like me to filter hostels based on your department or dietary preferences?");
    });
});