export interface PricingPlan {
	name: string;
	description: string;
	price: { monthly: number; annual: number };
	features: string[];
	cta: string;
	featured?: boolean;
}

export interface FAQ {
	question: string;
	answer: string;
}

export const plans: PricingPlan[] = [
	{
		name: "Free",
		description: "For individuals getting started.",
		price: { monthly: 0, annual: 0 },
		features: [
			"Up to 3 projects",
			"Basic analytics",
			"Community support",
		],
		cta: "Get started",
	},
	{
		name: "Pro",
		description: "For growing teams that need more.",
		price: { monthly: 20, annual: 16 },
		features: [
			"Unlimited projects",
			"Advanced analytics",
			"Priority support",
			"Custom themes",
			"Early access to new features",
		],
		cta: "Start free trial",
		featured: true,
	},
];

export const faqs: FAQ[] = [
	{
		question: "Can I change plans later?",
		answer: "Yes. You can upgrade or downgrade at any time, and changes take effect on your next billing cycle.",
	},
	{
		question: "Is there a free trial?",
		answer: "The Pro plan includes a 14-day free trial. No credit card required to start.",
	},
	{
		question: "What payment methods do you accept?",
		answer: "All major credit cards. Enterprise customers can pay by invoice.",
	},
	{
		question: "Can I cancel anytime?",
		answer: "Absolutely. Cancel whenever you like — you'll keep access until the end of your billing period.",
	},
	{
		question: "Do you offer discounts for non-profits?",
		answer: "Yes, we offer discounted pricing for non-profits and educational institutions. Contact our team to learn more.",
	},
];