const verizonInfo = {
  unlimited_services: {
    Unlimited_Ultimate: {
      price_per_line: {
        "1_line": "$90/line",
        "2_lines": "$80/line",
        "3_lines": "$65/line",
        "4_lines": "$55/line",
      },
      features: {
        network: "5G Ultra Wideband",
        hotspot_data: "60GB",
        international_data: "10GB",
        international_connectivity: "Full",
      },
      availability: "August 31, 2023",
      pricing_condition: "Prices with paperless billing and autopay",
    },
    Unlimited_Plus: {
      price_per_line: {
        "1_line": "$80/line",
        "2_lines": "$70/line",
        "3_lines": "$55/line",
        "4_lines": "$45/line",
      },
      features: {
        network: "Ultra-wideband 5G",
        hotspot_data: "30GB",
        device_discounts: "50% off a smartwatch or tablet plan",
        speed: "Unthrottled",
      },
      pricing_condition: "Prices with paperless billing and autopay",
    },
    Welcome_Unlimited: {
      price_per_line: {
        "1_line": "$65/line",
        "2_lines": "$55/line",
        "3_lines": "$40/line",
        "4_lines": "$30/line",
      },
      features: {
        network: "5G Nationwide",
        talk_text_data: "Unlimited",
      },
      pricing_condition: "Prices with paperless billing and autopay",
    },
  },
  social_initiatives: {
    climate_tech_startups_support:
      "Supporting climate tech startups for economic, environmental, and social advancement",
    small_business_support: {
      grant_funding: "$500,000",
      goal: "Support 1,000,000 small businesses by 2023",
      digital_ready_portal: true,
    },
    corporate_responsibility: {
      job_preparation:
        "Preparing 500,000 lower-wage individuals for future jobs by 2030 through skills training",
    },
  },
  collaborations: {
    Apple_One: {
      bundled_with: "One Unlimited for iPhone",
      services_included: [
        "Apple Music",
        "Apple TV+",
        "Apple Arcade",
        "iCloud+",
      ],
      price: "6.95/line",
    },
    Disney_Bundle: {
      availability:
        "With Unlimited Ultimate, Unlimited Plus, and Unlimited Welcome plans",
      price: "$8.99/line",
      services_included: ["Disney+", "Hulu", "ESPN+"],
    },
  },
};

export default verizonInfo;
