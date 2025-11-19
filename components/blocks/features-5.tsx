import { Activity, Brain, Heart, TrendingUp } from 'lucide-react'
import Image from 'next/image'

export function Features() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-xl md:max-w-6xl px-6">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                    <div className="lg:col-span-2">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-regular tracking-tighter lg:text-5xl">Built for Modern Clinics</h2>
                            <p className="mt-6 text-muted-foreground">Comprehensive AI-powered tools that help you deliver proactive care and improve patient outcomes.</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <Brain className="size-5" />
                                AI Disease Predictions
                            </li>
                            <li>
                                <Activity className="size-5" />
                                Real-time Health Monitoring
                            </li>
                            <li>
                                <Heart className="size-5" />
                                Risk Assessment Analytics
                            </li>
                            <li>
                                <TrendingUp className="size-5" />
                                Patient Trend Tracking
                            </li>
                        </ul>
                    </div>
                    <div className="relative lg:col-span-3">
                        <div className="relative aspect-76/59 rounded-2xl overflow-hidden shadow-lg">
                            <Image 
                                src="/AllPatients.png" 
                                className="object-contain rounded-2xl" 
                                alt="NexFlow Patient Management" 
                                fill
                                style={{ borderRadius: '1rem' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
