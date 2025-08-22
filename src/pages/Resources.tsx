import { Calendar, BookOpen, Heart, Shield, Thermometer, Pill, Clock, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Resources = () => {
  const featuredArticles = [
    {
      title: 'Cold & Flu Season: Prevention and Treatment',
      excerpt: 'Essential tips for staying healthy during cold and flu season, including vaccination recommendations and symptom management.',
      category: 'Seasonal Health',
      readTime: '5 min read',
      date: 'November 2024',
      icon: Thermometer,
      featured: true
    },
    {
      title: 'Understanding Your Blood Pressure Medications',
      excerpt: 'A comprehensive guide to blood pressure medications, their effects, and lifestyle changes that can help.',
      category: 'Medication Guide',
      readTime: '8 min read',
      date: 'October 2024',
      icon: Heart,
      featured: true
    },
    {
      title: 'Diabetes Management: Daily Care Tips',
      excerpt: 'Practical advice for managing diabetes, including medication timing, diet considerations, and monitoring.',
      category: 'Chronic Care',
      readTime: '6 min read',
      date: 'October 2024',
      icon: Pill,
      featured: true
    }
  ];

  const healthTips = [
    {
      title: 'Medication Safety at Home',
      excerpt: 'Best practices for storing and organizing medications safely.',
      category: 'Safety',
      readTime: '3 min read',
      date: 'November 2024'
    },
    {
      title: 'Vaccine Schedule for Adults',
      excerpt: 'Stay up-to-date with recommended adult vaccinations.',
      category: 'Prevention',
      readTime: '4 min read',
      date: 'November 2024'
    },
    {
      title: 'Managing Multiple Medications',
      excerpt: 'Tips for keeping track of complex medication regimens.',
      category: 'Medication Guide',
      readTime: '5 min read',
      date: 'October 2024'
    },
    {
      title: 'Heart Health After 50',
      excerpt: 'Important cardiovascular health considerations as you age.',
      category: 'Heart Health',
      readTime: '7 min read',
      date: 'October 2024'
    },
    {
      title: 'Seasonal Allergy Relief',
      excerpt: 'Natural and pharmaceutical approaches to allergy management.',
      category: 'Seasonal Health',
      readTime: '4 min read',
      date: 'September 2024'
    },
    {
      title: 'Nutrition and Medications',
      excerpt: 'How food interactions can affect your medications.',
      category: 'Nutrition',
      readTime: '6 min read',
      date: 'September 2024'
    }
  ];

  const categories = [
    { name: 'Seasonal Health', count: 8, color: 'bg-accent/20 text-accent' },
    { name: 'Medication Guide', count: 12, color: 'bg-primary/20 text-primary' },
    { name: 'Chronic Care', count: 6, color: 'bg-wellness/40 text-wellness-foreground' },
    { name: 'Prevention', count: 10, color: 'bg-trust/20 text-trust' },
    { name: 'Safety', count: 5, color: 'bg-muted text-muted-foreground' }
  ];

  const resources = [
    {
      title: 'Medication Interaction Checker',
      description: 'Check for potential interactions between your medications.',
      type: 'Tool',
      icon: Shield
    },
    {
      title: 'Pill Identification Guide',
      description: 'Identify unknown pills and medications safely.',
      type: 'Reference',
      icon: Pill
    },
    {
      title: 'Health Screening Schedule',
      description: 'Recommended health screenings by age and risk factors.',
      type: 'Guide',
      icon: Calendar
    },
    {
      title: 'Emergency Contact Card',
      description: 'Printable card with emergency medication information.',
      type: 'Download',
      icon: Download
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-wellness py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-trust mb-6">
              Health Resources & Education
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Expert-reviewed health information, medication guides, and wellness tips to help you make informed decisions about your health.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.slice(0, 3).map((category, index) => (
                <Badge key={index} className={category.color}>
                  {category.name} ({category.count})
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trust mb-4">Featured Health Articles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our pharmacists share their expertise on current health topics and medication management.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-cta transition-smooth group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-accent/20 text-accent">{article.category}</Badge>
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center group-hover:scale-110 transition-bounce">
                      <article.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-trust line-clamp-2">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                    <span>{article.date}</span>
                  </div>
                  <Button variant="outline" className="w-full mt-4 hover:bg-primary hover:text-primary-foreground">
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories and Recent Articles */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-trust mb-6">Browse by Category</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-3 bg-background rounded-lg shadow-soft hover:shadow-card transition-smooth cursor-pointer"
                  >
                    <span className="font-medium text-trust">{category.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Articles */}
            <div className="lg:col-span-3">
              <h3 className="text-xl font-bold text-trust mb-6">Recent Health Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {healthTips.map((article, index) => (
                  <Card key={index} className="border-0 shadow-soft hover:shadow-card transition-smooth">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{article.date}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-trust mb-2 line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                          Read More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Tools & Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-trust mb-4">Health Tools & Resources</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Helpful tools and resources to support your health management and medication safety.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-cta transition-smooth text-center group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                    <resource.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-trust mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                  <Badge variant="outline" className="mb-4">{resource.type}</Badge>
                  <Button variant="outline" size="sm" className="w-full hover:bg-primary hover:text-primary-foreground">
                    Access Tool
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-trust text-trust-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Stay Informed</h2>
            <p className="text-lg mb-8 opacity-90">
              Subscribe to our monthly health newsletter for the latest medication updates, 
              seasonal health tips, and wellness advice from our pharmacists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background border-0 focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-accent hover:bg-accent/90 px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-xs mt-4 opacity-75">
              We respect your privacy. Unsubscribe anytime. No spam, just helpful health information.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;