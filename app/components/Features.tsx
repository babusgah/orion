import { Server, Shield, Zap } from 'lucide-react'

const features = [
  {
    icon: <Server className="w-12 h-12 text-blue-300" />,
    title: 'Powerful Backend',
    description: 'Leverage our robust serverside infrastructure for seamless script execution.',
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-300" />,
    title: 'Advanced Security',
    description: 'State-of-the-art protection to keep your scripts and data safe.',
  },
  {
    icon: <Zap className="w-12 h-12 text-blue-300" />,
    title: 'Lightning Fast',
    description: 'Optimized for speed, ensuring your scripts run quickly and efficiently.',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-20 bg-blue-900 bg-opacity-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-300">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-blue-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-200">{feature.title}</h3>
              <p className="text-blue-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

