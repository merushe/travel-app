// api.js - Travel & Budget System V6 (dengan Role & Akses Terbatas)
const API_BASE_URL = 'https://travel-system-worker.rmersiana.workers.dev';

const apiService = {
    // ============================================================
    // USER SESSION
    // ============================================================
    
    getCurrentUser() {
        const user = sessionStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },
    
    isAdmin() {
        const user = this.getCurrentUser();
        return user && user.role === 'admin';
    },
    
    getCurrentUserEmail() {
        const user = this.getCurrentUser();
        return user ? user.email : null;
    },
    
    getCurrentUserName() {
        const user = this.getCurrentUser();
        return user ? user.name : null;
    },
   
async login(email, password) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        
        if (!response.ok) {
            return { success: false, message: `Server error (${response.status})` };
        }
        
        const data = await response.json();
        
        if (data.success) {
            sessionStorage.setItem('user', JSON.stringify(data.user));
            return { success: true, user: data.user };
        } else {
            return { success: false, message: data.error || 'Login gagal' };
        }
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, message: error.message };
    }
},
 
    // Cek apakah user bisa mengedit travel request tertentu
    canEdit(formId, travelData) {
        const user = this.getCurrentUser();
        if (!user) return false;
        if (user.role === 'admin') return true;
        // Non-admin hanya bisa edit milik sendiri
        return travelData && travelData.employeeEmail === user.email;
    },
    
    // Cek apakah user bisa menghapus travel request tertentu
    canDelete(formId, travelData) {
        return this.canEdit(formId, travelData);
    },
    
    // ============================================================
    // TRAVEL FORMS
    // ============================================================

    async getAllTravelForms() {
        try {
            const response = await fetch(`${API_BASE_URL}/api/travel-forms`);
            const data = await response.json();
            // SEMUA user bisa melihat semua travel request
            return data.records || [];
        } catch (error) {
            console.error('Error fetching travel forms:', error);
            return [];
        }
    },

    async getTravelForm(formId) {
        try {
            const response = await fetch(`${API_BASE_URL}/api/travel-forms/${encodeURIComponent(formId)}`);
            const data = await response.json();
            return data.record || (data.formId ? data : null);
        } catch (error) {
            console.error('Error fetching travel form:', error);
            return null;
        }
    },

    async saveTravelForm(formData) {
        try {
            const user = this.getCurrentUser();
            // Tambahkan info user ke data
            formData.employeeEmail = user.email;
            formData.employeeName = user.name;
            
            const response = await fetch(`${API_BASE_URL}/api/travel-forms`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            return await response.json();
        } catch (error) {
            console.error('Error saving travel form:', error);
            return { success: false, error: error.message };
        }
    },
    
    async updateTravelForm(formId, formData) {
        const user = this.getCurrentUser();
        const existing = await this.getTravelForm(formId);
        
        // Validasi akses edit
        if (!this.canEdit(formId, existing)) {
            return { success: false, error: 'You do not have permission to edit this travel request' };
        }
        
        try {
            const response = await fetch(`${API_BASE_URL}/api/travel-forms/${encodeURIComponent(formId)}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            return await response.json();
        } catch (error) {
            console.error('Error updating travel form:', error);
            return { success: false, error: error.message };
        }
    },
    
    async deleteTravelForm(formId) {
        const user = this.getCurrentUser();
        const existing = await this.getTravelForm(formId);
        
        // Validasi akses hapus
        if (!this.canDelete(formId, existing)) {
            return { success: false, error: 'You do not have permission to delete this travel request' };
        }
        
        try {
            const response = await fetch(`${API_BASE_URL}/api/travel-forms/${encodeURIComponent(formId)}`, {
                method: 'DELETE'
            });
            return await response.json();
        } catch (error) {
            console.error('Error deleting travel form:', error);
            return { success: false, error: error.message };
        }
    },
    
    // ============================================================
    // BUDGETS
    // ============================================================
    
    async getAllBudgets() {
        try {
            const response = await fetch(`${API_BASE_URL}/api/budgets`);
            const data = await response.json();
            return data.records || [];
        } catch (error) {
            console.error('Error fetching budgets:', error);
            return [];
        }
    },
    
    async getBudget(formId) {
        try {
            const response = await fetch(`${API_BASE_URL}/api/budgets/${encodeURIComponent(formId)}`);
            const data = await response.json();
            return data.record || (data.formId ? data : null);
        } catch (error) {
            console.error('Error fetching budget:', error);
            return null;
        }
    },
    
    async saveBudget(budgetData) {
        try {
            const response = await fetch(`${API_BASE_URL}/api/budgets`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(budgetData)
            });
            return await response.json();
        } catch (error) {
            console.error('Error saving budget:', error);
            return { success: false, error: error.message };
        }
    },
    
    async updateBudget(formId, budgetData) {
        const user = this.getCurrentUser();
        const travel = await this.getTravelForm(formId);
        
        // Validasi akses edit budget (sama dengan edit travel)
        if (!this.canEdit(formId, travel)) {
            return { success: false, error: 'You do not have permission to edit this budget' };
        }
        
        try {
            const response = await fetch(`${API_BASE_URL}/api/budgets/${encodeURIComponent(formId)}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(budgetData)
            });
            return await response.json();
        } catch (error) {
            console.error('Error updating budget:', error);
            return { success: false, error: error.message };
        }
    },
    
    async deleteBudget(formId) {
        const user = this.getCurrentUser();
        const travel = await this.getTravelForm(formId);
        
        // Validasi akses hapus budget (sama dengan hapus travel)
        if (!this.canDelete(formId, travel)) {
            return { success: false, error: 'You do not have permission to delete this budget' };
        }
        
        try {
            const response = await fetch(`${API_BASE_URL}/api/budgets/${encodeURIComponent(formId)}`, {
                method: 'DELETE'
            });
            return await response.json();
        } catch (error) {
            console.error('Error deleting budget:', error);
            return { success: false, error: error.message };
        }
    },
    
    // ============================================================
    // INTEGRASI EXPENSE SYSTEM
    // ============================================================
    
    async createExpenseFromTravel(travelData) {
        try {
            // Kirim data ke expense system
            const expenseData = {
                employeeName: travelData.employeeName,
                employeeEmail: travelData.employeeEmail,
                division: travelData.department,
                project: travelData.projectName,
                description: `Travel: ${travelData.destination} - ${travelData.purpose}`,
                amount: travelData.estimatedBudget || 0,
                expenseDate: travelData.travelers?.[0]?.departure || new Date().toISOString().split('T')[0],
                expenseType: 'reimbursement',
                category: 'Travel & Accommodation',
                urgency: 'normal',
                relatedTravelId: travelData.formId
            };
            
            const response = await fetch(`${EXPENSE_API_URL}/api/expenses`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(expenseData)
            });
            return await response.json();
        } catch (error) {
            console.error('Error creating expense from travel:', error);
            return { success: false, error: error.message };
        }
    },
    
    // ============================================================
    // DASHBOARD STATS
    // ============================================================
    
    async getDashboardStats() {
        try {
            const response = await fetch(`${API_BASE_URL}/api/dashboard-stats`);
            return await response.json();
        } catch (error) {
            return { success: false, stats: { totalTravelForms: 0, totalBudgets: 0, totalBudget: 0 } };
        }
    }
};

// Tambahkan EXPENSE_API_URL
const EXPENSE_API_URL = 'https://expense-system-worker.rmersiana.workers.dev';

window.apiService = apiService;
console.log('✅ API Service V6 dengan Role & Akses Terbatas siap!');